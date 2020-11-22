# next-filter-nil
> Filter null/undefined value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-filter-nil
```

## usage
```js
import '@jswork/next-filter-nil';

nx.filterNil({
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
},null);


// ================= result  ================= 
{
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
      saveAsImage: { }
    }
  }
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-filter-nil/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-filter-nil
[version-url]: https://npmjs.org/package/@jswork/next-filter-nil

[license-image]: https://img.shields.io/npm/l/@jswork/next-filter-nil
[license-url]: https://github.com/afeiship/next-filter-nil/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-filter-nil
[size-url]: https://github.com/afeiship/next-filter-nil/blob/master/dist/next-filter-nil.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-filter-nil
[download-url]: https://www.npmjs.com/package/@jswork/next-filter-nil
