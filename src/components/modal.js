import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
`

const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 995;
    background: rgba(0,0,0,0.85);
`

const Content = styled.div`
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90%;
    overflow: auto;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.7);
    border-radius: 10px;
    width: 90%; /* This just a default width */
    max-width: 520px;
`

const Close = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 18px;
    opacity: 0.5;
    background: none;
    border: none;
    transition: opacity 0.2s ease;
`

const Modal = ({dismiss, children}) => (
    <ModalWrapper>
        <Overlay />
        <Content>
            {children}
            <Close onClick={dismiss}>
                X
            </Close>
        </Content>
    </ModalWrapper>
)

export default Modal