import alt, { Player } from 'alt-server';
import { BC_VEHICLE_EVENTS } from '../../shared/events';

export class BCVehicleDamageServer {
    static init() {}
}

setInterval(() => {
    Player.all.forEach((player) => {
        if (!player || !player.vehicle || !player.vehicle.driver) {
            return;
        }

        if (player.isDead) {
            return;
        }

        if (player.vehicle.driver.id !== player.id) {
            return;
        }

        alt.emitClient(player, BC_VEHICLE_EVENTS.CHECK_VEHICLE_ROT);
    });
}, 500);
