import { createFromIconfontCN } from '@ant-design/icons';

interface Props {
  type: string;
  size?: number;
  color?: string;
  className?: string;
}

const Iconfont: React.FC<Props> = (props) => {
  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2995112_qgh3oirnk5r.js',
  });
  return (
    <MyIcon
      className={props.className}
      type={props.type}
      style={{
        fontSize: props.size + 'px',
        color: props.color,
      }}
    />
  );
};

export default Iconfont;
