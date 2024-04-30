require('dotenv').config({path:'../.env'})

const { Translate } = require("@google-cloud/translate/build/src/v2");
const  { existsSync, readFileSync, readdirSync, writeFileSync } = require( "fs");
const  { resolve } = require("path");



if (!process.env.GOOGLE_TRANSLATE_CREDENTIALS) {
  throw new Error("No google translate credentials were found!");
}

const CREDENTIALS = JSON.parse(process.env.GOOGLE_TRANSLATE_CREDENTIALS);

const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id,
});

interface PageList {
  [key: string]: string[];
}

interface Languages {
  value: string;
}

const readFileAndWrite = (
  pagesArray: PageList[],
  keys: string[],
  fromLang: string,
  toLangList: string[] // Rename toLang to toLangList
  ) => {
    toLangList.map((toLang) => {
    pagesArray.map((page, index) => {
      page[keys[index]].map((filename) => {
        const filePath = resolve(
          __dirname + `/${fromLang}/${keys[index]}/${filename}`
        );
        
        if (!existsSync(filePath)) {
           throw new Error("JSON file path doesn't exist!");
         }
        const res = JSON.parse(readFileSync(filePath).toString());
        writeFile(res, filename, keys[index], toLangList);
      });
    });
  });
};

const translation = async (fullFile: any, toLang: string[]) => {
  if (Array.isArray(fullFile)) {
    await Promise.all(
      fullFile.map(async (item, index) => {
        if (Array.isArray(item) || typeof item == "object") {
          await translation(item, toLang);
        } else {
          let [res] = await translate.translate(fullFile[index], toLang);
          fullFile[index] = res;    
        }
      })
    );
  } else if (typeof fullFile == "object") {
    await Promise.all(
      Object.keys(fullFile).map(async (key) => {
        if (Array.isArray(fullFile[key]) || typeof fullFile[key] == "object") {  
          await translation(fullFile[key], toLang);
        } else {
          let [res] = await translate.translate(fullFile[key], toLang);
          fullFile[key] = res;
        }
      })
    );
  }
};

const writeFile = async (
  fullFile: any,
  fileName: string,
  page: string,
  toLang: string[]
  ) => {
  const filePath = resolve(__dirname + `/${toLang}/${page}/${fileName}`);
  await translation(fullFile, toLang);
   
  writeFileSync(filePath, JSON.stringify(fullFile, null, 2));

};

const start = async () => {
  const loadJSON = (path: string) => {
    if (!existsSync(path)) {
      throw new Error("JSON file path doesn't exist!");
    }
    return JSON.parse(readFileSync(path).toString());
  };

  const loadSubFolders = (path: string) => {
    let pageList:any[] = []
    let subFoldersList = readdirSync(path);
    let keys:any[] = []
    for (const folder of subFoldersList) {
      let pageObj: PageList  = {};
      pageObj[folder] = readdirSync(`${path}/${folder}`);
      keys.push(folder);
      pageList.push(pageObj);
    }

    return { pageList, keys };
  };

  const LANGUAGES = loadJSON(resolve(__dirname, `./languages.json`));

  const { pageList, keys } = loadSubFolders("./en");

  let languagesList = LANGUAGES.map((val:any) => val.value)
  
  let fromLang = "en";

  readFileAndWrite(pageList, keys, fromLang, languagesList);

};

start();

