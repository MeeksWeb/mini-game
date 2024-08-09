import { forwardRef, useImperativeHandle, useRef  } from "react"; //this helps to pass ref as prop from one component to another
import { createPortal } from "react-dom";

const ResultModal = forwardRef( function ResultModal({targetTime, remainingTime, onReset}, ref ){
    const dialog1 = useRef();
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(
        ref,
        () => {
        return {
            open() {
                dialog1.current.showModal()
            }
            
        };
})
  return createPortal(
    <dialog ref={dialog1} className="result-modal"> 

    {/*by default dialog is invisible but adding the 'open' attribute makes it visible */}

      
      {userLost ? <h2>You Lost!</h2>:<h2>You Won!</h2> }
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong> 
          {formattedRemainingTime} seconds left.
        </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('root')
  )
})

export default ResultModal
