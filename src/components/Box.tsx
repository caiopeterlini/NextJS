interface StyleSheet{
  fontFamily: string;
}
interface BaxProps{
  tag: any;
  children: React.ReactNode;
  slyleSheet: StyleSheet;
}
export default function Box({slyleSheet, children, tag}:BaxProps) {
  const Tag = tag || 'div';
  return (
    <Tag style={slyleSheet}>
      {children}  
    </Tag>
  );
}
