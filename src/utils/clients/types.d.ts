type CommonGroup = {
  enabled: true;
  component: React.FC<any>;
};

type PublicGroup = CommonGroup & {
  enabledMethod: {
    email: true;
    google: true;
  };
};

type PrivateGroup = CommonGroup & {};

type ConfigGroup = PublicGroup;
type ConfigPrivateGroup = PrivateGroup;

type PublicFeatureGroup = Record<string, ConfigGroup>;

type PrivateFeatureGroup = Record<string, ConfigPrivateGroup>;
