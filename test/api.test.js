var nx = require('next-js-core2');
require('../src/next-filter-nil');

describe('basic api test', () => {
  test('null undeinfed value => return the value', () => {
    var target1 = null;
    var target2 = undefined;

    var res1 = nx.filterNil(target1);
    var res2 = nx.filterNil(target2);

    expect(res1).toBe(null);
    expect(res2).toBe(undefined);
  });

  test('deep 1 object filter null/undefined', () => {
    var target1 = {
      name: 'fei',
      age: null,
      gradpa: undefined
    };

    var target2 = {
      name: 'fei',
      age: undefined,
      dad: null
    };

    var res1 = nx.filterNil(target1);
    var res2 = nx.filterNil(target2, (_, value) => value === undefined);

    expect(res1).toEqual({ name: 'fei', gradpa: undefined });
    expect(res2).toEqual({ name: 'fei', dad: null });
  });

  test('deep N object filter null/undefined', () => {
    var target1 = {
      left: null,
      right: 0,
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            left: null,
            right: 10,
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {
            target: null
          }
        }
      }
    };

    var res1 = nx.filterNil(target1, (key, value, item) => {
      return value === null;
    });

    expect(res1).toEqual({
      right: 0,
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            right: 10,
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      }
    });
  });
});
