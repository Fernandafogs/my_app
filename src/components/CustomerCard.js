import React, {useState} from 'react';
import classNames from 'classnames';

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ModalConfirm from './ModalConfirm';

const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
}) => {

    const [openModal, setOpenModal] = useState(false);

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const handleConfirmModal = id => {  
        onRemoveCustomer(id);
        handleToggleOpenModal();
    }

    const handleRemoveCustomer = ({id}) => {
        handleToggleOpenModal();
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }} className={classNames(className)}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={avatar}>
                            R
                        </Avatar>
                    }

                    title={`${name} ${lastname}`}
                    subheader={email}
                />

                <CardActions disableSpacing>
                    <IconButton aria-label="editar cadastro">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm 
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={() => handleConfirmModal(id)}
                title="Deseja realmente excluir este cadastro?"
                message="Ao confirmar, o cadastro será removido permanentemente."
                 />
        </>
    );
}

export default CustomerCard;

