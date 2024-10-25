#!/bin/bash

# Nome da sessão tmux
SESSION_NAME="minha_sessao"

# Diretórios e comandos a serem executados
DIR1="~/ProjetoX"
COMANDO1="source tt.txt"

DIR2="~/ProjetoX/noVNC"
COMANDO2="./launch.sh"

DIR3="/outro/diretorio"
COMANDO3="htop"

# Inicia uma nova sessão do tmux
tmux new-session -d -s $SESSION_NAME

# Executa o primeiro comando no primeiro painel
tmux send-keys "cd $DIR1" C-m
tmux send-keys "$COMANDO1" C-m

# Divide a janela horizontalmente e executa o segundo comando
tmux split-window -h
tmux send-keys "cd $DIR2" C-m
tmux send-keys "$COMANDO2" C-m

# Divide novamente para o terceiro comando
tmux split-window -v
tmux send-keys "cd $DIR3" C-m
tmux send-keys "$COMANDO3" C-m

# Altere para visualizar todos os painéis
tmux select-layout tiled

# Anexa a sessão para visualizar os comandos rodando
tmux attach -t $SESSION_NAME
