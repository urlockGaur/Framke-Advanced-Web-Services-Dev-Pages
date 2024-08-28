import React, { Component, forwardRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Divider from '@mui/material/Divider';


// Slide Transition for Dialog
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class NewCountry extends Component {
    state = {
        showForm: false,
        country: '',
        gold: 0,
        silver: 0,
        bronze: 0,
    };

    // Toggle form state to control dialog open/close
    toggleForm = () => {
        this.setState((prevState) => ({ showForm: !prevState.showForm }));

        // Reset form fields when closing the dialog
        if (this.state.showForm) {
            this.setState({ country: '', gold: 0, silver: 0, bronze: 0 });
        }
    };

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // Save country and medal data
    saveCountry = () => {
        const { country, gold, silver, bronze } = this.state;
        this.props.onAdd(country, gold, silver, bronze);
        this.toggleForm(); // Close dialog after saving
    };

    render() {
        const { showForm, country, gold, silver, bronze } = this.state;

        return (
            <div className='New-country'>
                {/* Button to Open the Dialog */}
                <Fab
                    aria-label='add-country'
                    onClick={this.toggleForm}
                    sx={{
                        backgroundColor: '#570047',
                        color: '#FF5757',
                        '&:hover': {
                        backgroundColor: '#4a0034', // Optional: Change color on hover
        },
                    }}
                >
                    <AddIcon />
                </Fab>

                {/* Dialog with Slide Transition */}
                <Dialog
                    open={showForm}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.toggleForm}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            this.saveCountry();
                        },
                    }}
                >
                    <DialogTitle sx={{ paddingBottom: '8px' }}>Add Country</DialogTitle>
                    <Divider variant='middle' aria-hidden="true" />
                    <DialogContent>
                        <DialogContentText>
                            Please enter a new country.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="country"
                            name="country"
                            label="Country"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={country}
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="error" onClick={this.toggleForm}>Cancel</Button>
                        <Button type="submit" color="secondary" disabled={country.trim().length === 0}>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewCountry;