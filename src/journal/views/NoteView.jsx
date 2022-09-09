import { Button, Grid, IconButton, TextField, Typography, useFormControl } from '@mui/material'
import { SaveOutlined, UploadOutlined} from '@mui/icons-material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote, startUploadingFiles } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from 'react';

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving} = useSelector( state => state.journal);

  const { body, title, date, onInputChange, formState} = useForm(note);

  const fileInputRef = useRef();

  const dateString = useMemo( () => {
    const newDate= new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState])

  useEffect(() => {
    if(messageSaved.length > 0){
      Swal.fire('Nota Actualizada', messageSaved, 'success');
    }
  }, [messageSaved])
  
  
  const onSaveNote = () => {
    dispatch(startSaveNote());
  }

  const onFileInputChange = ({target}) => {
    if(target.files == 0) return;

    dispatch(startUploadingFiles(target.files));
  }

  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb:1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>

      <Grid item>

        <input 
                type="file"
                multiple 
                ref = {fileInputRef}
                onChange={onFileInputChange}
                style={{'display': 'none'}}
        />

        <IconButton
                    disabled={isSaving}
                    color='primary'
                    onClick={ () => fileInputRef.current.click()}>
          <UploadOutlined/>
        </IconButton>

        <Button 
                disabled={isSaving}
                onClick={onSaveNote}
                color='primary' 
                sx={{padding:2}}>
          <SaveOutlined sx={{ fontSize:30, mr: 1}} />
            Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1}}
          name="title"
          value= {title}
          onChange={onInputChange}
        />
        
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió hoy?"
          minRows={5}
          name="body"
          value= {body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery images={note.imageUrls} />
    </Grid>
  )
}
