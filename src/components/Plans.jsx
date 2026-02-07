import React from 'react';
import '../styles/global.css';

const Plans = () => {
    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: '#333' }}>
            <div className="container">
                <h2 className="section-title" style={{ color: '#000' }}>プラン・価格表</h2>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <p>※全プランにしゅーぞーのプロモーション支援が標準付帯。</p>
                </div>

                <div className="grid grid-3">
                    <div style={{ border: '1px solid #ddd', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>テキスト本（紙・電子）<br />出版プラン</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>298,000円<span style={{ fontSize: '1rem' }}>（税込）</span></p>
                    </div>

                    <div style={{ border: '1px solid #ddd', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>マンガ本（紙・電子）<br />出版プラン</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>298,000円<span style={{ fontSize: '1rem' }}>（税込）</span></p>
                    </div>

                    <div style={{
                        border: '2px solid var(--color-accent)',
                        padding: '2rem',
                        borderRadius: '8px',
                        textAlign: 'center',
                        position: 'relative',
                        backgroundColor: '#fff0f0'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '-15px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--color-accent)',
                            color: '#fff',
                            padding: '0.2rem 1rem',
                            borderRadius: '20px',
                            fontWeight: 'bold'
                        }}>
                            推奨
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>二刀流セット</h3>
                        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>498,000円<span style={{ fontSize: '1rem' }}>（税込）</span></p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-accent)', marginTop: '0.5rem' }}>個別より約10万円お得です！</p>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    <p>※表紙デザイン・A+コンテンツ・ペーパーバック（紙本）『丸投げ』対応費込。</p>
                    <p>※印税はこちらが頂くモデルになっておりますが、お受け取りを希望の場合は別途ご提案させていただきます。</p>
                </div>
            </div>
        </section>
    );
};

export default Plans;
