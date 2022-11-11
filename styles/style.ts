export const deviceStruct = (
  xs: string | number,
  sm: string | number,
  md: string | number,
  lg: string | number,
  xl: string | number
) => {
  return {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
  };
};

export const deviceWrapper = (
  mobile: string | number,
  desktop: string | number,
  print: boolean = false
) => {
  return deviceStruct(mobile, mobile, desktop, desktop, desktop);
};
