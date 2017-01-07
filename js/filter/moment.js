/**
 * Moment Service
 * @namespace Moment
 * @desc Formatação de data e hora Exemplo: <li>{{ banner.PostDate | moment}} </li> || var sPostDate = moment(postDate).format('DD/MM/YYYY');
 * @author Alexandre Garcia Simões - Mstech: 28/04/2015
 */
(function () {
    'use strict';

    angular
        .module('filters')
        .filter('moment', filterMoment);

    function filterMoment() {
        return function (value, fmt) {
            if (value)
                return moment(value).format(fmt || 'DD/MM/YYYY');
            else
                return '';
        }
    };
})();