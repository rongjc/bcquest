import React from 'react'
import { Dialog, DialogType} from 'office-ui-fabric-react/lib/Dialog';

export const Loader = ({show}) => {
  return <div>
            <Dialog
            hidden={ !show }          
            dialogContentProps={ {
              type: DialogType.normal,              
              subText: 'loading......'
            } }
            modalProps={ {
              isBlocking: true,
              containerClassName: 'ms-dialogMainOverride'
            } }
          />  
        </div>
}

