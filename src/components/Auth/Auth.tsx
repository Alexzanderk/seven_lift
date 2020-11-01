import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/auth/auth.action';
import { AppState } from '../../core/root.reducer';
import { AuthState } from '../../store/auth/auth.reducer';

interface Props {}

const Auth: FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('alexzanderk');
  const [password, setPassword] = React.useState('aC8LvxCChjaai');
  const dispatch = useDispatch();
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case 'username':
        return setUsername(event.target.value);
      case 'password':
        return setPassword(event.target.value);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = () => {
    dispatch(login(username, password));

    handleClose();
  };

  return (
    <div>
      {!token ? (
        <Button color="inherit" onClick={handleClickOpen}>
          Login
        </Button>
      ) : (
        <Button color="inherit" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      )}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            onChange={handleChange}
            value={username}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
          />
          <TextField
            onChange={handleChange}
            value={password}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Auth;
