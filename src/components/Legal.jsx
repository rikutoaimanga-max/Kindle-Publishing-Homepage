import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Legal = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 40px',
                backgroundColor: '#fff',
                borderBottom: '1px solid #eee'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                    <span style={{ color: '#f5a623' }}>📖</span> KindleCreator
                </div>
                <Link to="/" style={{ textDecoration: 'none', color: '#555', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    ホームに戻る
                </Link>
            </header>

            {/* Title Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1a237e 0%, #f57c00 100%)', // Approximate gradient from image
                padding: '60px 20px',
                textAlign: 'center',
                color: '#fff'
            }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>特定商取引法に基づく表記</h1>
            </div>

            {/* Content Section */}
            <div style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                }}>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', width: '30%', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>事業者名（屋号）</th>
                            <td style={{ padding: '20px', color: '#333' }}>AI Create Studio</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>代表者氏名</th>
                            <td style={{ padding: '20px', color: '#333' }}>町田 亮</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>所在地</th>
                            <td style={{ padding: '20px', color: '#333' }}>
                                〒332-0012<br />
                                埼玉県川口市本町4-8-3 ザ・パークハウス川口本町
                            </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>電話番号</th>
                            <td style={{ padding: '20px', color: '#333' }}>
                                070-1341-4369<br />
                                <span style={{ fontSize: '0.85rem', color: '#666' }}>※お取引やサービスに関するお問い合わせは、以下のメールアドレスまでご連絡いただけますようお願い申し上げます。</span>
                            </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>メールアドレス</th>
                            <td style={{ padding: '20px', color: '#333', fontWeight: 'bold' }}>ai-create-studio@gmail.com</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>役務の対価</th>
                            <td style={{ padding: '20px', color: '#333' }}>
                                完全無料<br />
                                ※当サービスは、出版された書籍より発生する印税(100%)を当社が受領することを対価とします。<br />
                                ※クライアント様への費用請求は一切ございません。
                            </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>対価以外に必要な費用</th>
                            <td style={{ padding: '20px', color: '#333' }}>一切なし</td>
                        </tr>
                        <tr>
                            <th style={{ padding: '20px', textAlign: 'left', backgroundColor: '#f9f9f9', fontWeight: 'bold', color: '#333' }}>サービスの提供時期</th>
                            <td style={{ padding: '20px', color: '#333' }}>
                                ヒアリング完了後、合意したスケジュールに従って制作を開始し、Amazonでの出版手続き完了をもって納品とします。通常、ヒアリングから3か月程度を予定しております。
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Legal;
