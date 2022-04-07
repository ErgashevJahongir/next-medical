import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiListItem from '@material-ui/core/ListItem';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import {
    LeftContentMenu,
    linkStyle,
    linkStyleAccordion,
    SpanColor,
    StyledAccordion,
} from '../styles/section.style';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ListItem = withStyles({
    button: {
        '&:hover': {
            backgroundColor: '#f8f8f8',
        },
    },
})(MuiListItem);

const AccordionDetails = withStyles({
    root: {
        padding: '0',
        background: '#f3f8f8',
    },
})(MuiAccordionDetails);

const AccordionSummary = withStyles({
    root: {
        marginBottom: 0,
        '&$expanded': {
            minHeight: 47,
        },
    },
    expanded: {
        margin: 0,
    },
})(MuiAccordionSummary);

const routes = [
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
];

const LeftMenu = ({ expanded, setExpanded }) => {
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const pathname = useRouter().pathname;

    useEffect(() => {
        if (pathname === '/weight-loss-surgery/overview') {
            setExpanded('panel1');
        } else if (pathname === '/weight-loss-surgery/candidate') {
            setExpanded('panel3');
        } else if (pathname === '/weight-loss-surgery/faqs') {
            setExpanded('panel4');
        } else {
            for (let i = 0; i < routes.length; i++) {
                if (routes[i].path === pathname) {
                    setExpanded('panel2');
                }
            }
        }
    }, []);

    return (
        <LeftContentMenu>
            <StyledAccordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <Link passHref href="/weight-loss-surgery/overview">
                            <a
                                style={linkStyle}
                                className={
                                    expanded === 'panel1' ? 'active' : 'link'
                                }
                            >
                                <span className="effet"></span>
                                <span>Overview</span>
                            </a>
                        </Link>
                    </Typography>
                </AccordionSummary>
            </StyledAccordion>
            <StyledAccordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                className={expanded === 'panel2' && 'active'}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        <Link passHref href="#">
                            <a
                                style={linkStyle}
                                className={
                                    expanded === 'panel2' ? 'active' : 'link'
                                }
                            >
                                <span className="effet"></span>
                                Procedures
                            </a>
                        </Link>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="column">
                        <ListItem button key={1}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/roux-en-y-gastric-bypass"
                                >
                                    <a
                                        style={linkStyleAccordion}
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/roux-en-y-gastric-bypass'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                    >
                                        <SpanColor>
                                            Roux-en-Y Gastric Bypass
                                        </SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem button key={2}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/sleeve-gastrectomy"
                                >
                                    <a
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/sleeve-gastrectomy'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                        style={linkStyleAccordion}
                                    >
                                        <SpanColor>
                                            Sleeve Gastrectomy
                                        </SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem button key={3}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/mini-gastric-bypass"
                                >
                                    <a
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/mini-gastric-bypass'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                        style={linkStyleAccordion}
                                    >
                                        <SpanColor>
                                            Mini Gastric Bypass
                                        </SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem button key={4}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/banded-bariatric-procedures"
                                >
                                    <a
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/banded-bariatric-procedures'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                        style={linkStyleAccordion}
                                    >
                                        <SpanColor>
                                            Banded Bariatric Procedures
                                        </SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem button key={5}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/gastric-banding"
                                >
                                    <a
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/gastric-banding'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                        style={linkStyleAccordion}
                                    >
                                        <SpanColor>Gastric Banding</SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem button key={6}>
                            <Typography>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/intra-gastric-balloon"
                                >
                                    <a
                                        className={
                                            pathname ===
                                            '/weight-loss-surgery/procedures/intra-gastric-balloon'
                                                ? 'active listLink'
                                                : 'listLink'
                                        }
                                        style={linkStyleAccordion}
                                    >
                                        <SpanColor>
                                            Intra Gastric Balloon
                                        </SpanColor>
                                    </a>
                                </Link>
                            </Typography>
                        </ListItem>
                    </Grid>
                </AccordionDetails>
            </StyledAccordion>
            <StyledAccordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        <Link
                            passHref
                            href="/weight-loss-surgery/candidate"
                            style={linkStyle}
                        >
                            <a
                                style={linkStyle}
                                className={
                                    expanded === 'panel3' ? 'active' : 'link'
                                }
                            >
                                <span className="effet"></span>
                                <span>Are you candidate</span>
                            </a>
                        </Link>
                    </Typography>
                </AccordionSummary>
            </StyledAccordion>
            <StyledAccordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel4a-header"
                >
                    <Typography style={{ margin: ' 0' }}>
                        <Link
                            passHref
                            href="/weight-loss-surgery/faqs"
                            style={linkStyle}
                        >
                            <a
                                style={linkStyle}
                                className={
                                    expanded === 'panel4' ? 'active' : 'link'
                                }
                            >
                                <span className="effet"></span>
                                <span>FAQs</span>
                            </a>
                        </Link>
                    </Typography>
                </AccordionSummary>
            </StyledAccordion>
        </LeftContentMenu>
    );
};

export default LeftMenu;
