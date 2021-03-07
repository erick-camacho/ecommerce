import { AppBar, Container, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Container>
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
              eCommerce Store
            </Typography>
            <div className={classes.grow} />
            {location.pathname === "/" &&
              <div className={classes.button}>
                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                  <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart/>
                  </Badge>
                </IconButton>     
              </div>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
 
export default Navbar;