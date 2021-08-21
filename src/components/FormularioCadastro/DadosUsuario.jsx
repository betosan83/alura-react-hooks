import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField id="email"
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
            <TextField id="senha"
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;