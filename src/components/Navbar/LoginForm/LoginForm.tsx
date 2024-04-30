"use client"
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";

const LoginForm = ({lng}:any) => {
  const { t } = useTranslation(lng, 'loginForm', LoginForm);
  

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.field}>
          <TextField
            sx={{ width: "14rem" }}
            required
            fullWidth
            placeholder={t('login.email')}
            id="email"
            name="email"
            autoComplete="current-email"
            autoFocus
          />
        </div>
        <div className={styles.field}>
          <TextField
            sx={{ width: "14rem" }}
            required
            fullWidth
            placeholder={t('login.password')}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <Button type="submit" fullWidth variant="contained">
          {t('login.sign-in')}
        </Button>
      </form>
      <Link href={`/${lng}`} className={styles.forgotPassword}>
        {t('login.forgot-password')}
      </Link>
    </div>
  );
};

export default LoginForm;
