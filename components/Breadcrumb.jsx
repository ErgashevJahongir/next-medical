import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';
import {
    activeBreadcrumbColor,
    breadcrumbColor,
} from '../styles/section.style';
import { useRouter } from 'next/router';

const routes = [
    {
        path: '/weight-loss-surgery/overview',
        breadcrumb: 'Overview',
    },
    {
        path: '/weight-loss-surgery/procedures/roux-en-y-gastric-bypass',
        breadcrumb: 'Procedures / Roux-en-Y Gastric Bypass',
    },
    {
        path: '/weight-loss-surgery/procedures/sleeve-gastrectomy',
        breadcrumb: 'Procedures / Sleeve Gastrectomy',
    },
    {
        path: '/weight-loss-surgery/procedures/mini-gastric-bypass',
        breadcrumb: 'Procedures / Mini Gastric Bypass',
    },
    {
        path: '/weight-loss-surgery/procedures/banded-bariatric-procedures',
        breadcrumb: 'Procedures / Banded Bariatric Procedures',
    },
    {
        path: '/weight-loss-surgery/procedures/gastric-banding',
        breadcrumb: 'Procedures / Gastric Banding',
    },
    {
        path: '/weight-loss-surgery/procedures/intra-gastric-balloon',
        breadcrumb: 'Procedures / Intra Gastric Balloon',
    },
    {
        path: '/weight-loss-surgery/candidate',
        breadcrumb: 'Are You A Candidate',
    },
    {
        path: '/weight-loss-surgery/faqs',
        breadcrumb: 'FAQs',
    },
];

export const Breadcrumb = ({ setExpanded }) => {
    const handleChange = (panel) => () => {
        setExpanded(panel);
    };

    let location = useRouter();

    return (
        <Breadcrumbs
            style={{ color: '#c3fbff' }}
            aria-label="breadcrumb"
            className="center"
        >
            <Link style={breadcrumbColor} href="#" passHref>
                <HomeIcon />
            </Link>
            <Link
                passHref
                style={breadcrumbColor}
                onClick={handleChange('panel1')}
                href="/weight-loss-surgery/overview"
            >
                Weight Loss Surgery
            </Link>
            {routes.map((rout) => {
                if (rout.path === location.pathname) {
                    // let position = rout.breadcrumb.search('/');
                    // console.log(location);
                    // if (position > 0) {
                    //     let frist = rout.breadcrumb.slice(0, position - 1);
                    //     let second = rout.breadcrumb.slice(
                    //         position + 2,
                    //         rout.breadcrumb.length - 1
                    //     );
                    //     return (
                    //         <Typography key={rout.breadcrumb + 'a'}>
                    //             <Link
                    //                 style={breadcrumbColor}
                    //                 href={rout.path}
                    //                 key={rout.breadcrumb}
                    //             >
                    //                 {frist}
                    //                 {' / '}
                    //             </Link>
                    //             <Link
                    //                 style={activeBreadcrumbColor}
                    //                 href={rout.path}
                    //                 key={rout.path}
                    //             >
                    //                 {second}
                    //             </Link>
                    //         </Typography>
                    //     );
                    // }
                    return (
                        <Link
                            style={activeBreadcrumbColor}
                            href={rout.path}
                            key={rout.breadcrumb}
                        >
                            {rout.breadcrumb}
                        </Link>
                    );
                }
            })}
        </Breadcrumbs>
    );
};
