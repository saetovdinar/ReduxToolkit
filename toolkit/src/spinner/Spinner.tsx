import styles from './Spinner.module.scss';
export default function Spinner({ children, isLoading, height }: {
	children: React.ReactNode;
	isLoading: boolean;
	height?: string;
}) {
	return (
		<>
			{!isLoading ? (
				<div className={styles.container} style={{ height }}>
					<span className={styles.loader}></span>
				</div>
			) : (
				children
			)}
		</>
	);
}
