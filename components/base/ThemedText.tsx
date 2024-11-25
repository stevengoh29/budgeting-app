import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'default' | 'bold' | 'semibold' | 'subtitle' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  variant = 'default',
  size = 'md',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const dynamicSizeStyle = styles[size] || styles.md;

  return (
    <Text
      style={[
        { color },
        dynamicSizeStyle,
        variant === 'default' ? styles.default : undefined,
        variant === 'bold' ? styles.title : undefined,
        variant === 'semibold' ? styles.defaultSemiBold : undefined,
        variant === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  // Default font variants
  default: {
    fontFamily: 'DMSansRegular',
  },
  defaultSemiBold: {
    fontFamily: 'DMSansSemiBold',
  },
  title: {
    fontFamily: 'DMSansBold',
  },
  subtitle: {
    fontFamily: 'DMSansSemiBold',
  },
  link: {
    color: '#0a7ea4',
    fontFamily: 'DMSansMedium',
  },

  // Font sizes
  xs: {
    fontSize: 12,
    lineHeight: 18,
  },
  sm: {
    fontSize: 14,
    lineHeight: 21,
  },
  md: {
    fontSize: 16,
    lineHeight: 24,
  },
  lg: {
    fontSize: 20,
    lineHeight: 28,
  },
  xl: {
    fontSize: 24,
    lineHeight: 32,
  },
});