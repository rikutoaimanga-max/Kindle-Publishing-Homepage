import React from 'react';
import '../styles/global.css';
import Header from './Header';
import Footer from './Footer';

const Legal = () => {
    return (
        <div className="legal-page">
            <Header />
            <section style={{ backgroundColor: '#fff', padding: '120px 0', color: '#333' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>特定商取引法に基づく表記</h2>

                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1rem', lineHeight: '1.6' }}>
                        <tbody>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', width: '30%', textAlign: 'left', fontWeight: 'bold' }}>販売業者</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>株式会社Publinks</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>運営統括責任者</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>小川 修平</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>所在地</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>
                                    〒651-0084<br />
                                    兵庫県神戸市中央区磯辺通1丁目1番18号カサベラ国際プラザビル707号室
                                </td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>電話番号</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>
                                    09077840598<br />
                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>※基本電話でのお問い合わせは受け付けていないため、下記連絡先までお問合せお願いいたします。</span>
                                </td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>連絡先</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}><a href="https://www.chatwork.com/shuzo_kindle" target="_blank" rel="noopener noreferrer" style={{ color: '#00A0E9', textDecoration: 'underline' }}>https://www.chatwork.com/shuzo_kindle</a></td>
                            </tr>

                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>商品代金以外の必要料金</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>振込手数料（銀行振込の場合）</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>支払方法</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>銀行振込</td>
                            </tr>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'left', fontWeight: 'bold' }}>支払時期</th>
                                <td style={{ border: '1px solid #ddd', padding: '20px' }}>
                                    銀行振込：注文後7日以内
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Legal;
