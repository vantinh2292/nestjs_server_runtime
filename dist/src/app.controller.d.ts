import { SocketGateway } from './socket_io/socket_io.gateway';
import { ScadaWordDisplayRefreshService } from './scada_word-display/scada_word-display-refresh.service';
import { ScadaElementRefreshService } from './scada_element/scada_element-refresh.service';
import { ScadaBitAdjustRefreshService } from './scada_bit-adjust/scada_bit-adjust-refresh.service';
import { ScadaBitDisplayRefreshService } from './scada_bit-display/scada_bit-display-refresh.service';
import { ScadaDWordDisplayRefreshService } from './scada_dword-display/scada_dword-display-refresh.service';
import { ScadaDWordAdjustRefreshService } from './scada_dword-adjust/scada_dword-adjust-refresh.service';
import { ScadaStringRefreshService } from './scada_string/scada_string-refresh.service';
import { ScadaTextFieldRefreshService } from './scada_text-field/scada_text-field-refresh.service';
import { ScadaWordAdjustRefreshService } from './scada_word-adjust/scada_word-adjust-refresh.service';
import { ScadaSetupAlarmRefreshService } from './scada_setup-alarm/scada_setup-alarm-refresh.service';
export declare class AppController {
    private readonly socketGateway;
    private readonly scadaWordDisplayRefreshService;
    private readonly scadaWordAdjustRefreshService;
    private readonly scadaDWordDisplayRefreshService;
    private readonly scadaElementRefreshService;
    private readonly scadaBitAdjustRefreshService;
    private readonly scadaBitDisplayRefreshService;
    private readonly scadaDWordAdjustRefreshService;
    private readonly scadaStringRefreshService;
    private readonly scadaTextFieldRefreshService;
    private readonly scadaSetupAlarmRefreshService;
    constructor(socketGateway: SocketGateway, scadaWordDisplayRefreshService: ScadaWordDisplayRefreshService, scadaWordAdjustRefreshService: ScadaWordAdjustRefreshService, scadaDWordDisplayRefreshService: ScadaDWordDisplayRefreshService, scadaElementRefreshService: ScadaElementRefreshService, scadaBitAdjustRefreshService: ScadaBitAdjustRefreshService, scadaBitDisplayRefreshService: ScadaBitDisplayRefreshService, scadaDWordAdjustRefreshService: ScadaDWordAdjustRefreshService, scadaStringRefreshService: ScadaStringRefreshService, scadaTextFieldRefreshService: ScadaTextFieldRefreshService, scadaSetupAlarmRefreshService: ScadaSetupAlarmRefreshService);
}
