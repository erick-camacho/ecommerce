import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            eCommerce Store
          </Typography>
          <div className={classes.grow}/>
          <div>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
 
export default Navbar;