import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consectetur id, consequuntur tempora adipisci praesentium, maiores quis, odit obcaecati cum voluptate ipsum facilis excepturi nemo iste aliquam necessitatibus expedita. Vitae.
      </Typography> */}
      <NothingSelectedView/>
      {/* <NoteView/> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          botton: 50
        }}
      >
        <AddOutlined sx={ {fontSize:30} } />
         
      </IconButton>
    </JournalLayout>
  )
}
