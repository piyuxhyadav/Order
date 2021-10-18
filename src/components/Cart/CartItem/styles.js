import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth:""
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    width:"1 rem",
    display: 'flex',
    alignItems: 'center',
    
    
  },
  grow: {
    flexGrow: 1,
  },
}));