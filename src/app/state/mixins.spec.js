import {agentAddressComposerMixin, currencyFormatterMixin, propertyTitleComposerMixin, phoneNumberFormatterMixin} from './mixins';

const expect = require('chai').expect;


describe('Mixins', function () {

    describe('currencyFormatter', function () {

        it('should return a string', function () {
            const output = currencyFormatterMixin.format('bar');
            expect(output).to.be.a('string');
        });

        it('should be formatted in pounds', function () {
            const output = currencyFormatterMixin.format('10000');
            expect(output).to.be.equal('10,000');
        });

        it('should be formatted in pounds', function () {
            const output = currencyFormatterMixin.format('1280000');
            expect(output).to.be.equal('1,280,000');
        });

        it('should return 0 when not a number', function () {
            const output = currencyFormatterMixin.format('not a number');
            expect(output).to.be.equal('0');
        });

    });

    describe('agentAddressComposerMixin', function () {

        const output = agentAddressComposerMixin.compose('foo','bar');

        it('should return a string', function () {
            expect(output).to.be.a('string');
        });

        it('should be composed correctly', function () {
            expect(output).to.be.equal('foo, bar');
        });

        it('should be composed with an error string in case of missing parameters', function () {
            const output = agentAddressComposerMixin.compose();
            expect(output).to.be.equal('invalid data');
        });
    });

    describe('propertyTitleComposerMixin', function () {

        const output = propertyTitleComposerMixin.compose('10','flat');

        it('should return a string', function () {
            expect(output).to.be.a('string');
        });

        it('should be composed correctly', function () {
            expect(output).to.be.equal('10 bedroom flat for sale');
        });

        it('should be composed with an error string in case of missing parameters', function () {
            const output = propertyTitleComposerMixin.compose();
            expect(output).to.be.equal('invalid data');
        });

    });

    describe('phoneNumberFormatterMixin', function () {

        const output = phoneNumberFormatterMixin.format('123456');

        it('should return a string', function () {
            expect(output).to.be.a('string');
        });

        it('should be composed correctly', function () {
            expect(output).to.be.equal('T: 123456');
        });

        it('should be composed with an error string in case of missing parameters', function () {
            const output = phoneNumberFormatterMixin.format();
            expect(output).to.be.equal('invalid data');
        });

    });

});

