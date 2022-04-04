import { Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiListItem from '@material-ui/core/ListItem';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiTypography from '@material-ui/core/Typography';
import {
    LeftContentMenu,
    linkStyle,
    linkStyleAccordion,
    SpanColor,
} from '../styles/section.style';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ListItem = withStyles({
    root: {
        padding: '0 0 0 22px',
    },
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

const Accordion = withStyles({
    root: {
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:first-child': {
            borderTop: '1px solid rgba(0, 0, 0, .125)',
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: '0',
        },
    },
    expanded: {
        margin: 0,
    },
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        padding: '0',
        '&$expanded': {
            minHeight: 48,
        },
    },
    content: {
        '&$content': {
            margin: 0,
        },
        '&$expanded': {
            margin: 0,
        },
    },
    expanded: {
        margin: 0,
    },
})(MuiAccordionSummary);

const Typography = withStyles({
    root: {
        width: '100%',
    },
})(MuiTypography);

const useStyles = makeStyles((theme) =>
    createStyles({
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        expanded: {
            padding: '0px',
        },
    })
);

// const routes = [
//     {
//         path: '/',
//         breadcrumb: 'Overview',
//     },
//     {
//         path: '/procedures/roux-en-y-gastric-bypass',
//         breadcrumb: 'Procedures / Roux-en-Y Gastric Bypass',
//     },
//     {
//         path: '/procedures/sleeve-gastrectomy',
//         breadcrumb: 'Procedures / Sleeve Gastrectomy',
//     },
//     {
//         path: '/procedures/mini-gastric-bypass',
//         breadcrumb: 'Procedures / Mini Gastric Bypass',
//     },
//     {
//         path: '/procedures/banded-bariatric-procedures',
//         breadcrumb: 'Procedures / Banded Bariatric Procedures',
//     },
//     {
//         path: '/procedures/gastric-banding',
//         breadcrumb: 'Procedures / Gastric Banding',
//     },
//     {
//         path: '/procedures/intra-gastric-balloon',
//         breadcrumb: 'Procedures / Intra Gastric Balloon',
//     },
//     {
//         path: '/candidate',
//         breadcrumb: 'Are You A Candidate',
//     },
//     {
//         path: '/faqs',
//         breadcrumb: 'FAQs',
//     },
// ];

const LeftMenu = ({ expanded, setExpanded }) => {
    const classes = useStyles();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        // localStorage.setItem('name', JSON.stringify(panel));
    };
    return (
        <LeftContentMenu>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <Link
                            passHref
                            // style={linkStyle}
                            href="/weight-loss-surgery/overview"
                        >
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
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    className={classes.panelSummary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>
                        <Link
                            passHref
                            href="#"
                            style={linkStyle}
                            className={
                                expanded === 'panel2' ? 'active' : 'link'
                            }
                        >
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
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={1}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/roux-en-y-gastric-bypass"
                                >
                                    <SpanColor className="listLink">
                                        Roux-en-Y Gastric Bypass
                                    </SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={2}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/sleeve-gastrectomy"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <SpanColor>Sleeve Gastrectomy</SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={3}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/mini-gastric-bypass"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <SpanColor>Mini Gastric Bypass</SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={4}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/banded-bariatric-procedures"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <SpanColor>
                                        Banded Bariatric Procedures
                                    </SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={5}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/gastric-banding"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <SpanColor>Gastric Banding</SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                        <ListItem
                            className={classes.innerMenuItem}
                            button
                            key={6}
                        >
                            <Typography className={classes.heading}>
                                <Link
                                    passHref
                                    href="/weight-loss-surgery/procedures/intra-gastric-balloon"
                                    className="listLink"
                                    style={linkStyleAccordion}
                                >
                                    <SpanColor>Intra Gastric Balloon</SpanColor>
                                </Link>
                            </Typography>
                        </ListItem>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>
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
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    className={classes.panelSummary}
                    aria-controls="panel1a-content"
                    id="panel4a-header"
                >
                    <Typography
                        className={classes.heading}
                        style={{ margin: ' 0' }}
                    >
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
            </Accordion>
        </LeftContentMenu>
    );
};

export default LeftMenu;
