import { useState } from 'react';
import LeftMenu from './LeftMenu';
import { Top } from './Top';
import { Container } from '../styles/section.style';

const Layout = ({ children }) => {
    const [expanded, setExpanded] = useState('');

    return (
        <main>
            <Top setExpanded={setExpanded} />
            <Container>
                <div className="section">
                    <LeftMenu expanded={expanded} setExpanded={setExpanded} />
                    {children}
                </div>
            </Container>
        </main>
    );
};

export default Layout;
