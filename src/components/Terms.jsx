import React, { useEffect } from 'react';
import '../styles/global.css';
import Header from './Header';
import Footer from './Footer';

const Terms = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Header />
            <section style={{ backgroundColor: '#fff', padding: '120px 0', color: '#333' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>利用規約</h2>

                    <div style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            この利用規約（以下，「本規約」といいます。）は，株式会社Publinks（以下，「当社」といいます。）がこのウェブサイト上で提供するKindle出版代行サービス（以下，「本サービス」といいます。）の利用条件を定めるものです。利用者の皆様（以下，「ユーザー」といいます。）には，本規約に従って本サービスをご利用いただきます。
                        </p>

                        <h3 style={styles.h3}>第1条（適用）</h3>
                        <p style={styles.p}>
                            本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                        </p>

                        <h3 style={styles.h3}>第2条（契約の成立）</h3>
                        <p style={styles.p}>
                            本サービスへの申し込みは、当社所定の手続き（フォーム入力、決済等）を経て、当社がこれを承認した時点で契約が成立するものとします。
                        </p>

                        <h3 style={styles.h3}>第3条（成果の非保証）</h3>
                        <p style={styles.p}>
                            当社は、本サービスの提供により作成された電子書籍について、Amazonランキングの上位表示、ベストセラー獲得、特定の印税収入、または集客効果等を保証するものではありません。これらはAmazonのアルゴリズムや市場動向に強く依存するため、当社のコントロールが及ばない範囲であることをユーザーは了承するものとします。
                        </p>

                        <h3 style={styles.h3}>第4条（Amazon規約およびアカウントリスク）</h3>
                        <ol style={styles.ol}>
                            <li>Amazon KDP（Kindle Direct Publishing）の利用規約やガイドラインは、Amazon社の判断により予告なく変更される場合があります。当社は、サービス提供時点でのガイドラインに準拠するよう努めますが、将来的な規約変更による影響について責任を負いません。</li>
                            <li>ユーザーの過去のKDP利用状況や、Amazon社の独自判断により、アカウントの停止（BAN）や出版停止措置が取られた場合、当社は一切の責任を負わないものとします。</li>
                        </ol>

                        <h3 style={styles.h3}>第5条（制作をお断りするコンテンツ）</h3>
                        <p style={styles.p}>
                            当社は、以下のいずれかに該当すると判断したコンテンツの制作および出版代行をお断りいたします。契約成立後にこれらが発覚した場合、直ちにサービスを中止し、返金は行わないものとします。
                        </p>
                        <ul style={styles.ul}>
                            <li>公序良俗に反する内容（過度なアダルト表現、暴力的・残虐な表現等）</li>
                            <li>他者を誹謗中傷する内容、ヘイトスピーチ、差別を助長する内容</li>
                            <li>犯罪行為を推奨・肯定する内容、または法令に違反する内容</li>
                            <li>著作権、肖像権、プライバシー権など、第三者の権利を侵害する内容</li>
                            <li>「絶対に稼げる」「元本保証」など、虚偽または誤解を招く金融・投資情報</li>
                            <li>Amazon KDPのコンテンツガイドラインに抵触する恐れが高い内容（PLR、パブリックドメインの不適切な利用等）</li>
                        </ul>

                        <h3 style={styles.h3}>第6条（コンテンツの責任）</h3>
                        <p style={styles.p}>
                            本サービス等の利用に関連してユーザーが提供した情報、資料、素材等の内容（事実関係の真偽を含む）に関する一切の責任はユーザーに帰属します。当該コンテンツに起因して第三者との間で紛争が生じた場合、ユーザーは自己の責任と費用においてこれを解決するものとし、当社に何らの損害を与えないものとします。
                        </p>

                        <h3 style={styles.h3}>第7条（料金および支払方法）</h3>
                        <p style={styles.p}>
                            ユーザーは，本サービスの対価として，当社が別途定め，本ウェブサイトに表示する利用料金を，当社が指定する方法により支払うものとします。
                        </p>

                        <h3 style={styles.h3}>第8条（キャンセル・返金）</h3>
                        <p style={styles.p}>
                            サービスの性質上、制作業務（インタビュー実施、ライターの手配、構成案の作成等）に着手した後の、ユーザー都合によるキャンセルおよび返金には応じられません。
                        </p>

                        <h3 style={styles.h3}>第9条（著作権等の取り扱い）</h3>
                        <ol style={styles.ol}>
                            <li>本サービスを通じて作成された電子書籍（原稿、表紙等）の著作権は、原則として報酬の支払完了をもって当社からユーザーに移転するものとします。ただし、制作過程で使用したテンプレートやノウハウ等の権利は当社に留保されます。</li>
                            <li>当社は、ユーザーから特段の申し出がない限り、制作した実績（表紙画像、書名、ランキング実績等）を当社のポートフォリオ、ウェブサイト、SNS等で制作事例として公開できるものとします。</li>
                        </ol>

                        <h3 style={styles.h3}>第10条（免責事項）</h3>
                        <p style={styles.p}>
                            当社は、本サービスの利用によりユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。また、当社が責任を負う場合であっても、その賠償額はユーザーが当社に支払った対価の額を上限とします。
                        </p>

                        <h3 style={styles.h3}>第11条（管轄裁判所）</h3>
                        <p style={styles.p}>
                            本契約に関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
                        </p>

                        <p style={{ marginTop: '3rem', textAlign: 'right' }}>
                            以上<br />
                            制定日：2024年4月1日
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const styles = {
    h3: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginTop: '2.5rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #eee',
        paddingBottom: '0.5rem',
        color: '#00A0E9'
    },
    p: {
        marginBottom: '1rem'
    },
    ol: {
        marginBottom: '1rem',
        paddingLeft: '1.5rem',
        listStyleType: 'decimal'
    },
    ul: {
        marginBottom: '1rem',
        paddingLeft: '1.5rem',
        listStyleType: 'disc'
    }
};

export default Terms;
