import Header from '~/components/Layout/components/Header';
import Sidebar from '~/components/Layout/DefaultLayout/Sidebar';

function DefaultLayour({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar></Sidebar>
                <div className="contain">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayour;
