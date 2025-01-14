import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  Collapse,
  Avatar,
  Stack,
  Divider
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [hasAutoReplied, setHasAutoReplied] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    if (!hasAutoReplied) {
      setTimeout(() => {
        const autoReply = {
          id: Date.now() + 1,
          text: '¡Gracias por probar mi página! Un saludo, Ricki',
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, autoReply]);
        setHasAutoReplied(true);
      }, 1000);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            style={{
              position: 'fixed',
              bottom: 80,
              right: 20,
              zIndex: 1000,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: 320,
                height: 450,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 2
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  p: 2,
                  bgcolor: '#1976d2',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <SupportAgentIcon />
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Chat en vivo
                </Typography>
                <IconButton 
                  size="small" 
                  onClick={() => setIsOpen(false)}
                  sx={{ color: 'white' }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Messages Area */}
              <Box
                sx={{
                  flexGrow: 1,
                  p: 2,
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  bgcolor: '#f5f5f5'
                }}
              >
                {messages.map((message) => (
                  <Box
                    key={message.id}
                    sx={{
                      display: 'flex',
                      justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                      mb: 1
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: '80%',
                        display: 'flex',
                        gap: 1,
                        alignItems: 'flex-start',
                        flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: message.sender === 'user' ? '#1976d2' : '#4caf50'
                        }}
                      >
                        {message.sender === 'user' ? 'U' : 'R'}
                      </Avatar>
                      <Box>
                        <Paper
                          sx={{
                            p: 1.5,
                            bgcolor: message.sender === 'user' ? '#1976d2' : 'white',
                            color: message.sender === 'user' ? 'white' : 'inherit',
                            borderRadius: 2
                          }}
                        >
                          <Typography variant="body2">{message.text}</Typography>
                        </Paper>
                        <Typography
                          variant="caption"
                          sx={{
                            mt: 0.5,
                            display: 'block',
                            textAlign: message.sender === 'user' ? 'right' : 'left',
                            color: 'text.secondary'
                          }}
                        >
                          {message.time}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Input Area */}
              <Box
                component="form"
                onSubmit={handleSend}
                sx={{
                  p: 2,
                  bgcolor: 'white',
                  borderTop: '1px solid #e0e0e0',
                  display: 'flex',
                  gap: 1
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2
                    }
                  }}
                />
                <IconButton 
                  type="submit"
                  color="primary"
                  disabled={!newMessage.trim()}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <Fab
        color="primary"
        aria-label="chat"
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <ChatIcon />
      </Fab>
    </>
  );
};

export default LiveChat; 