# next-filter-nil
> Filter null/undefined value.

## installation
```bash
npm install -S @feizheng/next-filter-nil
```

## usage
```js
import '@feizheng/next-filter-nil';

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
