import React, { useState } from 'react';
import { Input } from '../components/Input';
import { NoticeModal } from '../components/NoticeModal';
import styles from '../styles/information.module.css';

export default function InformationPage() {
    const [formData, setFormData] = useState({
        name: '',
        birthmonth: '',
        birthdate: '',
        gender: '',
        address: '',
        platform: [] as string[],
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [modalMessage, setModalMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        if (name === "platform") {
            setFormData((prev) => ({
                ...prev,
                platform: checked
                    ? [...prev.platform, value]
                    : prev.platform.filter((v) => v !== value),
            }));
        } else if (name === "gender") {
            setFormData((prev) => ({ ...prev, gender: value }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        const nameRegex = /^[A-Za-z\u4e00-\u9fa5]+$/;
        const numberRegex = /^\d+$/;

        if (!formData.name || !nameRegex.test(formData.name)) {
            newErrors.name = "請輸入有效的中文或英文姓名";
        }
        if (!formData.birthmonth || !numberRegex.test(formData.birthmonth)) {
            newErrors.birthmonth = "請輸入數字月份";
        } else {
            const month = Number(formData.birthmonth);
            if (month < 1 || month > 12) {
                newErrors.birthmonth = "月份應介於 1 到 12 之間";
            }
        }
        if (!formData.birthdate || !numberRegex.test(formData.birthdate)) {
            newErrors.birthdate = "請輸入數字日期";
        } else {
            const date = Number(formData.birthdate);
            if (date < 1 || date > 31) {
                newErrors.birthdate = "日期應介於 1 到 31 之間";
            }
        }
        if (!formData.gender) {
            newErrors.gender = "請選擇性別";
        }
        if (!formData.address || !nameRegex.test(formData.address)) {
            newErrors.address = "請輸入有效的中文或英文地址";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const msg = `您輸入的資料如下：\n\n姓名：${formData.name}\n生日：${formData.birthmonth} 月 ${formData.birthdate} 日\n性別：${formData.gender}\n地址：${formData.address}\n平台：${formData.platform.join('、')}`;
            setModalMessage(msg);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px' }}>
            <h1>基本資料填寫</h1>
            <form onSubmit={handleSubmit} className={styles.formbox}>
                <div className={styles.doublebox}>
                    <div>
                        <Input
                            label="姓名"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            pattern="[A-Za-z\u4e00-\u9fa5]+"
                            placeholder="請輸入中文或英文"
                            required
                            error={errors.name}
                        />
                    </div>
                    <div className={styles.genderbox}>
                        <label>性別</label><br />
                        <label><input type="radio" name="gender" value="男" checked={formData.gender === '男'} onChange={handleCheckboxChange} /> 男</label>
                        <label style={{ marginLeft: '16px' }}><input type="radio" name="gender" value="女" checked={formData.gender === '女'} onChange={handleCheckboxChange} /> 女</label>
                        {errors.gender && <div style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</div>}
                    </div>
                    <div>
                        <Input
                            label="出生月"
                            name="birthmonth"
                            type="number"
                            value={formData.birthmonth}
                            onChange={handleChange}
                            placeholder="1-12"
                            required
                            error={errors.birthmonth}
                        />
                    </div>
                    <div>
                        <Input
                            label="出生日"
                            name="birthdate"
                            type="number"
                            value={formData.birthdate}
                            onChange={handleChange}
                            placeholder="1-31"
                            required
                            error={errors.birthdate}
                        />
                    </div>
                </div>

                <Input
                    label="地址"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    pattern="[A-Za-z\u4e00-\u9fa5]+"
                    placeholder="請輸入中文或英文"
                    required
                    error={errors.address}
                />

                <div className={styles.platformbox} style={{ marginBottom: '16px' }}>
                    <label className={styles.platformtitle}>追蹤平台（可複選）</label>
                    {['instagram', 'Github', 'Facebook', 'Line'].map((item) => (
                        <label key={item} style={{ marginRight: '12px' }}>
                            <input
                                type="checkbox"
                                name="platform"
                                value={item}
                                checked={formData.platform.includes(item)}
                                onChange={handleCheckboxChange}
                            /> {item}
                        </label>
                    ))}
                </div>
                <div className={styles.submitbox}>
                    <button type="submit" className={styles.submit} >送出</button></div>
            </form>

            {modalMessage && <NoticeModal message={modalMessage} onClose={() => setModalMessage(null)} />}
        </div>
    );
}