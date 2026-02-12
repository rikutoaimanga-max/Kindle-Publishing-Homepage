import React from 'react';
import '../styles/global.css';
import CTA from './CTA';

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        {
            q: '「丸投げ」と書いてますが、結局どれくらい私のリソースが必要ですか？',
            a: 'ヒアリング（1〜2時間程度）と、構成案・原稿の確認（方向性がずれないように、序盤でも確認の依頼をさせて頂きます）、および「読者特典（リスト獲得用）」のご用意のみです。執筆、リサーチ、デザイン、入稿作業といった「実務」は100%こちらで代行します。多忙な経営者の方でも、本業を止めることなく出版が可能です。'
        },
        {
            q: 'どんな人が対象ですか？',
            a: (
                <span>
                    主に「自分の知識や経験を資産化し、集客と教育を自動化したい」と考える経営者・個人事業主・インフルエンサーの方が対象です。<br /><br />
                    具体的には、以下のような方に最適なサービスです。<br /><br />
                    <span style={{ fontWeight: 'bold' }}>・SNSやYouTubeの投稿が溜まっている方</span>：<br />流れて消えるストックを、Amazonという巨大市場で「24時間働く営業マン」に作り替えたい方。<br /><br />
                    <span style={{ fontWeight: 'bold' }}>・本業が多忙で、執筆に時間を割けない方</span>：<br />1〜2時間のヒアリングだけで、構成から執筆、出版手続きまで全て「丸投げ」したい合理的思考の方。<br /><br />
                    <span style={{ fontWeight: 'bold' }}>・業界内での「圧倒的な権威」が欲しい方</span>：<br />フォロワー数という流動的な数字ではなく、「著者」という不動の肩書きで競合と差別化したい方。<br /><br />
                    <span style={{ fontWeight: 'bold' }}>・集客の質を上げ、成約率を高めたい方</span>：<br />本を通じて事前に「教育・ファン化」を済ませ、決済ストレスのない状態で濃い見込み客を獲得したい方。
                </span>
            )
        },
        {
            q: 'テキスト本とマンガ本、どちらが良いですか？',
            a: (
                <span>
                    結論から申し上げますと、「ターゲットが誰か」と「出版の目的」によって決まります。<br /><br />
                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>・テキスト本が向いているケース</span>
                    <span style={{ display: 'block', paddingLeft: '1rem', marginBottom: '1rem' }}>
                        〇ターゲット： 経営者、ビジネスマン、特定の専門知識を求める層。<br />
                        〇目的： 深い信頼構築、専門性の証明、高単価商品の成約。<br />
                        〇強み： 文字情報の密度が高いため、「この人は本物だ」という圧倒的な権威性を刷り込むことができます。
                    </span>
                    <span style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>・マンガ本が向いているケース</span>
                    <span style={{ display: 'block', paddingLeft: '1rem', marginBottom: '1rem' }}>
                        〇ターゲット： 潜在層（まだ課題に気づいていない層）、若年層、読書習慣のない層。<br />
                        〇目的： 入り口（認知）の拡大、読了率の向上、公式LINE等への誘導数最大化。<br />
                        〇強み： 心理的ハードルが極めて低く、テキスト本の数倍のスピードで「読了」まで導けるため、リスト獲得率が劇的に上がります。
                    </span>
                    <span style={{ fontWeight: 'bold' }}>迷われている方へ</span>：<br />
                    「認知をマンガで広げ、信頼をテキストで固める」という二刀流（同時出版）が、ビジネスインパクトを最大化させる最短ルートです。どちらが適しているかは、無料カウンセリングにてあなたのビジネスモデルを拝見した上で、最適な戦略をご提案します。
                </span>
            )
        },
        {
            q: 'どのくらいの期間で出版できますか？',
            a: 'テキスト書籍であればコンテンツをいただいてから1～2か月、マンガであれば2～3か月程度で出版可能です。ただし、コンテンツのボリュームや内容の複雑さによって期間が変動しますので、詳しいスケジュールはヒアリング時に目安をお伝えさせていただきます。'
        },
        {
            q: '印税を渡すのは損ではありませんか？',
            a: '印税をお渡しするプランもございますが、ジャンルによっては金額としてかなり小さいことと、継続的な出版が無ければみるみる落ちていってしまいますので、あまりおすすめしておりません。また、印税をクライアント様へお渡しする場合は出版手続きを代行することができません。（Amazonの規約上他人のアカウントへのログインが禁止されているため）こういった事情を鑑みて、値段を下げて印税を頂くというモデルを提案させて頂いております。'
        },
        {
            q: '著者名は誰になりますか？',
            a: '基本的にはご依頼者様の名義です。私たちの名前を編集・制作としてクレジットすることで、Amazonのレコメンド機能を最大化し、既存のファン層以外にも本を届ける『戦略的露出』が可能になります。'
        },
        {
            q: 'どんなコンテンツでも書籍化できますか？',
            a: '基本的には可能ですが、Amazonのガイドラインに違反する内容（違法性のあるもの、公序良俗に反するものなど）は制作できません。また、内容によっては編集者としてお名前を出すことを控えさせていただく場合がございます。ヒアリング時に内容を確認させていただき、最適な形をご提案いたします。'
        },
        {
            q: 'AIで生成した質の低い原稿になりませんか？',
            a: 'ご安心ください。AIを補助的に使うことはあっても、丸投げで生成することはありません。あなたの「言葉の癖」や「独自の視点」を活かした血の通った原稿を作成します。'
        },
        {
            q: 'Amazonランキング1位は本当に取れますか？',
            a: 'ベストセラーを狙いつつ、レコメンドを最大化するカテゴリ選定とプロモーション、Amazon SEOを組み合わせることで、高確率でランキング上位を狙います。ただし、「一瞬の1位」よりも「集客し続けるロングセラー」にすることを最優先に設計します。'
        },
        {
            q: '出版後のサポートはありますか？',
            a: '出版直後の拡散支援はもちろん、その後の「本の活用方法（バックエンド商品への繋げ方）」についてもアドバイスさせていただきます。'
        }
    ];

    return (
        <section style={{ backgroundColor: '#fff', padding: '80px 0', color: '#333' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="section-title" style={{ color: '#000', display: 'inline-block', borderBottom: '2px solid var(--color-secondary)', paddingBottom: '0.5rem' }}>Q&A</h2>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: '1rem',
                                borderBottom: '1px solid #eee',
                                paddingBottom: '1rem',
                                cursor: 'pointer'
                            }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                transition: 'color 0.3s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#333'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Q.</span>
                                    {item.q}
                                </div>
                                <span style={{
                                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.3s',
                                    color: 'var(--color-secondary)'
                                }}>
                                    ▼
                                </span>
                            </h3>
                            <div style={{
                                overflow: 'hidden',
                                maxHeight: openIndex === index ? '500px' : '0',
                                opacity: openIndex === index ? 1 : 0,
                                transition: 'all 0.4s ease-in-out',
                                paddingLeft: '2rem'
                            }}>
                                <p style={{ display: 'flex', alignItems: 'flex-start', marginTop: '1rem', color: '#555', lineHeight: '1.6' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '0.5rem', fontWeight: 'bold' }}>A.</span>
                                    <span>{item.a}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
                        「限定月3社まで」。<br />
                        まずは「診断」で、あなたの発信の資産価値を確かめてください。
                    </p>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <CTA />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
