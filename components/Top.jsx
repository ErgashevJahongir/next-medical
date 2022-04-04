import {
    Container,
    TopBlog,
    TopContent,
    TopTitle,
} from '../styles/section.style';
import { Breadcrumb } from './Breadcrumb';

export const Top = ({ setExpanded }) => {
    return (
        <TopContent>
            <Container>
                <div className="center">
                    <TopBlog>
                        <TopTitle>Weight Loss Surgery</TopTitle>
                        <div role="presentation">
                            <Breadcrumb setExpanded={setExpanded} />
                        </div>
                    </TopBlog>
                </div>
            </Container>
        </TopContent>
    );
};
