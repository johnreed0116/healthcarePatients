/**
 * Copyright 2018-2020 bluefox <dogafox@gmail.com>
 *
 * MIT License
 *
 **/

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

import I18n from '../i18n';
import SelectID from '../Components/SelectID';
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
    headerID: {
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    dialog: {
        height: '95%'
    },
    content: {
        height: '100%',
        overflow: 'hidden'
    }
});

class DialogSelectID extends React.Component {
    constructor(props) {
        super(props);
        this.dialogName = this.props.dialogName || 'default';
        this.dialogName = 'SelectID.' + this.dialogName;

        this.filters = window.localStorage.getItem(this.dialogName) || '{}';
        try {
            this.filters = JSON.parse(this.filters);
        } catch (e) {
            this.filters = {};
        }

        this.state =  {
            selected: this.props.selected || '',
            name:     ''
        };
    }

    handleCancel() {
        this.props.onClose();
    };

    handleOk() {
        this.props.onOk(this.state.selected, this.state.name);
        this.props.onClose();
    };

    render() {
        let title;
        if (this.state.name || this.state.selected) {
            title = [(<span key="selected">{I18n.t('Selected')} </span>), (<span key="id" className={this.props.classes.headerID}>{
                (this.state.name || this.state.selected) + (this.state.name ? ' [' + this.state.selected + ']' : '')
            }</span>)];
        } else {
            title = this.props.title || I18n.t('Please select object ID...');
        }

        return (
            <Dialog
                disableBackdropClick
                maxWidth={false}
                disableEscapeKeyDown
                classes={{paper: this.props.classes.dialog}}
                fullWidth={true}
                open={true}
                aria-labelledby="selectid-dialog-title"
            >
                <DialogTitle id="selectid-dialog-title">{title}</DialogTitle>
                <DialogContent className={this.props.classes.content}>
                    <SelectID
                        prefix={this.props.prefix}
                        defaultFilters={this.filters}
                        statesOnly={this.props.statesOnly}
                        style={{width: '100%', height: '100%'}}
                        connection={this.props.connection}
                        selected={this.state.selected}
                        name={this.state.name}
                        theme={this.props.theme}
                        onFilterChanged={filterConfig => {
                            this.filters = filterConfig;
                            window.localStorage.setItem(this.dialogName, JSON.stringify(filterConfig));
                        }}
                        onSelect={(selected, name, isDouble) => {
                            selected !== this.state.selected && this.setState({selected, name});
                            isDouble && this.handleOk();
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleOk()} disabled={!this.state.selected} color="primary">{this.props.ok || I18n.t('Ok')}</Button>
                    <Button onClick={() => this.handleCancel()} color="primary">{this.props.cancel || I18n.t('Cancel')}</Button>
                </DialogActions>
            </Dialog>
        );
    }
}

DialogSelectID.propTypes = {
    classes: PropTypes.object,
    onClose: PropTypes.func,
    dialogName: PropTypes.string,
    onOk: PropTypes.func.isRequired,
    title: PropTypes.string,
    selected: PropTypes.string,
    statesOnly: PropTypes.bool,
    connection: PropTypes.object.isRequired,
    cancel: PropTypes.string,
    prefix: PropTypes.string,
    ok: PropTypes.string,
    theme: PropTypes.string,
};

export default withStyles(styles)(DialogSelectID);
