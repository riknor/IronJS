﻿using Et = System.Linq.Expressions.Expression;
using Meta = System.Dynamic.DynamicMetaObject;

namespace IronJS.Runtime.Js
{
    public class ValueObj : Obj, IValueObj
    {
        public ValueObj(object value)
        {
            Value = value;
        }

        #region IValueObj Members

        public object Value { get; protected set; }

        #endregion
    }
}
