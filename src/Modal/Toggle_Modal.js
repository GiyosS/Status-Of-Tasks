import React, {useState} from 'react';

import { Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

import {useDispatch, useSelector} from "react-redux";

import {GithubContext} from "../context/context";
import { SaveUser, ToggleModal} from "../feacures/cards/Card_Slice";


function Toggle_Modal() {


    const data =  React.useContext(GithubContext)
    const {inputValue, setInputValue, selectValue, setselectValue} = data

    const [disableButton, setDisableButton] = useState(true)
    const {modalVisible, todos, SelectedStatus, edit} = useSelector((store) => store.Card_Slice)
    const dispatch = useDispatch()

    const SaveCHanges = ()=>{
        dispatch(
        SaveUser({
            id: todos.length+1,
            status: selectValue,
            title: inputValue,
        }))
        dispatch(ToggleModal())
        setInputValue('')
        setselectValue('')
    }
    const SelectChange=(e)=>{
        setselectValue(e.target.value)
        if(e.target.value !== ''){
            setDisableButton(false)
        }
        else{
            setDisableButton(true)
        }
    }
    const CloseModal = ()=>{
       dispatch(ToggleModal())
        setInputValue('')
        setselectValue('')
    }
    return (
        <div>
            <Modal id="exampleModal" isOpen={modalVisible} >
                <ModalHeader>
                    {edit? 'Add Post': 'Edit Post'}
                </ModalHeader>
                <ModalBody>
                    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder={'Task'} className={'form-control'}/> <br/>
                    <select value={selectValue} onChange={SelectChange} className={'form-control'}>
                        <option value={''}>Status</option>
                        {SelectedStatus.map((itemValue, index)=>{
                            return(
                                <option  key={index} value={itemValue}>{itemValue}</option>
                            )
                        })}
                    </select>
                </ModalBody>
                <ModalFooter>
                    <button type={'button'} className={'btn btn-success'} disabled={disableButton} onClick={SaveCHanges} > save
                    </button>
                    <button  type={'button'} className={'btn btn-primary'} onClick={CloseModal}> cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default Toggle_Modal;