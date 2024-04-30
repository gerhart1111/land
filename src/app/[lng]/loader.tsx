import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

interface SkeletonLoaderProps {
  count: number;
  height?: string;
  width?: string;
  variant: "text" | "rectangular" | "rounded" | "circular";
}

const Loader:React.FC<SkeletonLoaderProps> = ({
  count,
  height,
  width,
  variant
  }) => {
    return (
        <Stack spacing={1}>
          {[...Array(count)].map((_, i) => (
            <Skeleton
              key={i}
              variant={variant}
              width={width}
              height={height}
            />
          ))}
        </Stack>
    );
}

export default Loader;