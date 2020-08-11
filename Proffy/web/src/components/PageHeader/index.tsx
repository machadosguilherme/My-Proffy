import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (Props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{Props.title}</strong>
            {Props.description && <p>{Props.description}</p>}

            {Props.children} 
        </div>
    </header>
    );
}
export default PageHeader;