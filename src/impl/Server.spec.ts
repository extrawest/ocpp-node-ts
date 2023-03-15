import {Server} from './Server';

describe('Test getCpIdFromUrl method', () => {
    it('should extract cp id from the url', () => {
        const cpId = Server.getCpIdFromUrl('ws://localhost/ocpp/service/CP5612')
        expect(cpId).toBe('CP5612');
    });

    it('should extract cp and decode correctly', () => {
        const cpId = Server.getCpIdFromUrl('ws://localhost/ocpp/service/CP%205612')
        expect(cpId).toBe('CP 5612');
    });

    it('should strip query parameters from uri', () => {
        const cpId = Server.getCpIdFromUrl('ws://localhost/ocpp/service/CP%205612?foo=bar')
        expect(cpId).toBe('CP 5612');
    });

    it('should return undefined cp id if provided with undefined input', () => {
        const cpId = Server.getCpIdFromUrl(undefined)
        expect(cpId).toBe(undefined);
    });
});

