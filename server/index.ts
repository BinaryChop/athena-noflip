import alt from 'alt-server';
import * as Athena from '@AthenaServer/api';

import { BCVehicleDamageServer } from './src/server';
import { INDEX_CONFIG } from '../shared/config';

Athena.systems.plugins.registerPlugin(INDEX_CONFIG.PLUGIN_NAME, () => {
    BCVehicleDamageServer.init();
    alt.log(
        `~lg~[PLUGIN] ==> ${INDEX_CONFIG.PLUGIN_NAME} V.${INDEX_CONFIG.VERSION} - Athena V.${
            INDEX_CONFIG.ATHENA_VERSION
        } successfully loaded.(~w~Authors: ${INDEX_CONFIG.AUTHORS.join(', ')}~lg~)`,
    );
});
