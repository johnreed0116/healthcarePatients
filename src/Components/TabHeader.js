import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

class TabHeader extends Component {

    render() {
        return (
            <Grid
                item
                container
                alignItems="center"
            >
                { this.props.children }
            </Grid>
        );
    }
}

export default TabHeader;