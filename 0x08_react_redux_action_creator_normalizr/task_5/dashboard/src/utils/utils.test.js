// In strict assertion mode, non - strict methods behave like their corresponding strict methods.For example, assert.deepEqual() will behave like assert.deepStrictEqual().
import { strict as assert } from 'assert';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Test Utils', () => {

    it('Tests that getFullYear is current', () => {
        assert.equal(getFullYear(), new Date().getFullYear());
    });
    it('Validates the result of getFooterCopy with true', () => {
        assert.equal(getFooterCopy(true), 'Holberton School.');
    });
    it('Validates the result of getFooterCopy with false', () => {
        assert.equal(getFooterCopy(false), 'Holberton School main dashboard');
    });

    it('checks return of getLatestNotification', () => {
        // use JSON.stringify because
        assert.equal(JSON.stringify(getLatestNotification()), JSON.stringify({ __html: '<strong>Urgent requirement</strong> - complete by EOD' }));
    });
});