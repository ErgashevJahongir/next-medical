import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LeftMenu from './LeftMenu';
import { Top } from './Top';
import { Container } from '../styles/section.style';

const Layout = ({ children }) => {
    let location = useRouter();
    const [expanded, setExpanded] = useState(false);
    //     () => {
    //     const saved = localStorage.getItem('name');
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || 'panel1';
    // }

    useEffect(() => {
        () => {
            const saved = window.localStorage.getItem('name');
            const initialValue = JSON.parse(saved);
            setExpanded(initialValue || 'panel1');
            // return initialValue || 'panel1';
        };
    }, [location.pathname]);

    return (
        <main>
            <Top setExpanded={setExpanded} />
            <Container>
                <div className="section">
                    <LeftMenu
                        expanded={expanded}
                        setExpanded={setExpanded}
                        location={location}
                    />
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default Layout;
