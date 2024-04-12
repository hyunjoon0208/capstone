import { MouseEvent, ReactNode } from 'react';
import style from '../../_style/component/header/index.module.css';

const Header = (props: {
	title: string;
	component?: ReactNode;
	onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}) => {
	const { title, component = null, onClick = () => {} } = props;

	return (
		<div className={style.container} onClick={onClick}>
			<span className={style.title}>{title}</span>
			{component}
		</div>
	);
};

export default Header;
