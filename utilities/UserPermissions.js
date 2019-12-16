import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'

class UserPermissions {
    getCameraPermission = async () => {
        if(Constants.plateform.ios) {
            const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

            if(status != "granted") {
                alert("Nous avons besoin de votre permission pour utiliser la caméra")
            }
        }
    }
}

export default new UserPermissions();