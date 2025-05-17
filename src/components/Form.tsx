import styles from '../styles/Form.module.css';

type RoleData = {
    name: string;
    description: string;
    hashtags: { text: string; color: string }[];
    compatibleWith: string;
    incompatibleWith: string;
    reasonCompatible: string;
    reasonIncompatible: string;
    boxColor: string;
};

type Props = {
    headers: string[];
    data: RoleData[];
    title: string;
};

export const HamsterTable = ({ headers, data, title }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {headers.map((title) => <th key={title}>{title}</th>)}
                    </tr>
                </thead>
                {/* 桌面版表格 */}
                <tbody>
                    {data.map((role) => (
                        <tr key={role.name} >
                            <td style={{ color: role.boxColor }}>{role.name}</td>
                            <td>{role.description}</td>
                            <td>
                                {role.hashtags.map((tag) => (
                                    <span
                                        key={tag.text}
                                        style={{
                                            backgroundColor: tag.color,
                                            padding: '2px 6px',
                                            marginRight: '6px',
                                            borderRadius: '18px',
                                            color: '#fff',
                                            display: 'inline-block',
                                            fontSize: '12px',
                                            margin: '1px'
                                        }}
                                    >
                                        {tag.text}
                                    </span>
                                ))}
                            </td>
                            <td>
                                <div>
                                    <strong>{role.compatibleWith}</strong>
                                    <br />
                                    <span style={{ fontSize: '12px' }}>{role.reasonCompatible}</span>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <strong>{role.incompatibleWith}</strong>
                                    <br />
                                    <span style={{ fontSize: '12px' }}>{role.reasonIncompatible}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* 手機版卡片式 */}
            <div className={styles.cardList}>
                {data.map((role) => (
                    <div key={role.name} className={styles.cardItem} >
                        <h2 style={{ color: role.boxColor }}>{role.name}</h2>

                        <div className="section">
                            <p>{role.description}</p>
                        </div>

                        <div className={`section ${styles.tags}`}>
                            {role.hashtags.map((tag) => (
                                <span key={tag.text} style={{ backgroundColor: tag.color }}>
                                    {tag.text}
                                </span>
                            ))}
                        </div>

                        <div className="section">
                            <strong>合得來：{role.compatibleWith}</strong>
                            <p>{role.reasonCompatible}</p>
                        </div>

                        <div className="section">
                            <strong>不合：{role.incompatibleWith}</strong>
                            <p>{role.reasonIncompatible}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};